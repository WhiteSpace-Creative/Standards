Imports System.Web.UI.WebControls.Adapters
Imports Microsoft.VisualBasic

Namespace WSC.ControlAdaptors
    Public Class CheckboxAdapter
        Inherits WebControlAdapter

        Protected Overrides Sub Render(writer As HtmlTextWriter)
            Dim targetControl As CheckBox = TryCast(Me.Control, CheckBox)

            If targetControl Is Nothing Then
                MyBase.Render(writer)
                Return
            End If

            writer.Write("<label")
            targetControl.LabelAttributes.AddAttributes(writer)
            writer.Write(">")
            writer.WriteBeginTag("input")
            writer.WriteAttribute("type", "checkbox")
            writer.WriteAttribute("id", targetControl.ClientID)
            writer.WriteAttribute("name", targetControl.UniqueID)
            writer.WriteAttribute("value", targetControl.Text)
            If targetControl.Checked Then
                writer.WriteAttribute("checked", "checked")
            End If
            If targetControl.CssClass.Length > 0 Then
                writer.WriteAttribute("class", targetControl.CssClass)
            End If
            targetControl.InputAttributes.AddAttributes(writer)
            writer.Write(" /> ")
            writer.Write(targetControl.Text)
            writer.Write("</label>")
        End Sub
    End Class

    Public Class CheckboxListAdapter
        Inherits WebControlAdapter

        Protected Overrides Sub Render(writer As HtmlTextWriter)
            Dim targetControl = DirectCast(Me.Control, ListControl)

            If targetControl Is Nothing OrElse TypeOf targetControl Is IRepeatInfoUser = False Then
                MyBase.Render(writer)
                Return
            End If

            writer.WriteBeginTag("span")
            writer.WriteAttribute("id", targetControl.ClientID)
            If (targetControl.CssClass.Length > 0) Then
                writer.WriteAttribute("class", targetControl.CssClass)
            End If
            targetControl.Attributes.AddAttributes(writer)
            writer.Write(">")

            Dim repeaterInfo As IRepeatInfoUser = DirectCast(Me.Control, IRepeatInfoUser)
            For i As Integer = 0 To targetControl.Items.Count - 1
                repeaterInfo.RenderItem(ListItemType.Item, i, New RepeatInfo(), writer)
            Next

            writer.WriteEndTag("span")
        End Sub
    End Class
End Namespace

