Imports System.Net.Mail
Imports System.Data

Partial Class usercontrols_ContactUs
        Inherits WSC.MacroBase

    Private _EmailTo As String
    Public Property EmailTo() As String
        Get
            Return _EmailTo
        End Get
        Set(ByVal value As String)
            _EmailTo = Me.CleanInput(value)
        End Set
    End Property

    Public ReadOnly Property EmailFrom() As String
        Get
            Return Umbraco.UmbracoSettings.NotificationEmailSender
        End Get
    End Property


    Private _EmailSubject As String = "Web Contact Submission"
    Public Property EmailSubject() As String
        Get
            Return _EmailSubject
        End Get
        Set(ByVal value As String)
            If Not String.IsNullOrEmpty(value) Then
                _EmailSubject = Me.CleanInput(value)
            End If
        End Set
    End Property

    Private _Redirect As String
    <WSC.Helpers.MacroPropertyType(WSC.Helpers.MacroPropertyTypeAttribute.PropertyType.Node)>
    Public Property Redirect() As String
        Get
            Return _Redirect
        End Get
        Set(ByVal value As String)
            _Redirect = Me.CleanInput(value)
        End Set
    End Property
	
	Protected Sub Page_Load(sender As Object, e As System.EventArgs) Handles Me.Load
		If Not IsPostBack Then
			Dim ddlDataSource As New DataSet
			ddlDataSource.ReadXml(Server.MapPath("/inc/states-provinces.xml"))
			ddlState.DataSource = ddlDataSource
			ddlState.DataTextField = "name"
			ddlState.DataValueField = "abbreviation"
			ddlState.DataBind()
			ddlState.Items.Insert(0, New ListItem("Select a State/Province/Region", String.Empty))
		End If
	End Sub


    Protected Sub btnSubmit_Click(ByVal sender As Object, ByVal e As System.EventArgs) Handles btnSubmit.Click
        If Not Page.IsValid Then Return
        If Me.IsSpam Then Return

        '--Build the email
        Dim sRow As String = "<tr><td valign=""top"" style=""width: 150px; padding: 0 0 10px;""><strong>{0}</strong></td><td valign=""top"" style=""padding: 0 0 10px;"">{1}</td></tr>"
		Dim sbMsg As New StringBuilder()
		sbMsg.Append("<html><body><table>")
        sbMsg.AppendFormat(sRow, "Name:", txtFirstName.Text & " " & txtLastName.Text)
        sbMsg.AppendFormat(sRow, "Email:", txtEmail.Text)
		sbMsg.AppendFormat(sRow, "Company:", txtCompany.Text)
		sbMsg.AppendFormat(sRow, "Phone:", txtPhone.Text)
		sbMsg.AppendFormat(sRow, "State:", ddlState.SelectedValue.ToString())
        sbMsg.AppendFormat(sRow, "Zip:", txtZip.Text)
		sbMsg.AppendFormat(sRow, "Comments:", ReplaceLineBreaks(txtComments.Text))
		sbMsg.Append("</table></body></html>")
		
        '--Send out Email to Owners website.
        Dim msg As New MailMessage(Me.EmailFrom, Me.EmailTo)
        msg.Subject = Me.EmailSubject
        msg.Body = sbMsg.ToString()
        msg.IsBodyHtml = True
        Dim smtp As New SmtpClient()
        smtp.Send(msg)

        Response.Redirect(umbraco.library.NiceUrl(Me.Redirect))
    End Sub

	Protected Function ReplaceLineBreaks(input As String) As String
		Return umbraco.library.ReplaceLineBreaks(input)
	End Function
End Class
