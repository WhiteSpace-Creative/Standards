<%@ Control Language="VB" AutoEventWireup="false" CodeFile="ContactUs.ascx.vb" Inherits="usercontrols_ContactUs" %>

<asp:Panel ID="pnlForm" runat="server" CssClass="form">
    <asp:ValidationSummary ID="ValidationSummary" runat="server" CssClass="msg-error" ForeColor="" HeaderText="Please correct the following problems" />
    <p>
        <asp:RequiredFieldValidator ID="rfvFirstName" runat="server" ErrorMessage="Please enter your First Name." ControlToValidate="txtFirstName" Display="None"></asp:RequiredFieldValidator>
        <asp:Label ID="lblFirstName" associatedcontrolid="txtFirstName" runat="server" Text="*First Name:"></asp:Label>
        <asp:TextBox ID="txtFirstName" runat="server"></asp:TextBox>
    </p>
    <p>
        <asp:RequiredFieldValidator ID="rfvLastName" runat="server" ErrorMessage="Please enter your Last Name." ControlToValidate="txtLastName" Display="None"></asp:RequiredFieldValidator>
        <asp:Label ID="lblLastName" associatedcontrolid="txtLastName" runat="server" Text="*Last Name:"></asp:Label>
        <asp:TextBox ID="txtLastName" runat="server"></asp:TextBox>
    </p>
    <p>
        <asp:RequiredFieldValidator ID="rfvEmail" runat="server" ErrorMessage="Please enter your Email." ControlToValidate="txtEmail" Display="None"></asp:RequiredFieldValidator>
        <asp:RegularExpressionValidator ID="revEmail" runat="server" ErrorMessage="Please enter a valid Email." ValidationExpression="\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*" ControlToValidate="txtEmail" Display="None"></asp:RegularExpressionValidator>
        <asp:Label ID="lblEmail" associatedcontrolid="txtEmail" runat="server" Text="*Email:"></asp:Label>
        <asp:TextBox ID="txtEmail" runat="server"></asp:TextBox>
    </p>
    <p>
        <asp:Label ID="lblCompany" associatedcontrolid="txtCompany" runat="server" Text="Company:"></asp:Label>
        <asp:TextBox ID="txtCompany" runat="server"></asp:TextBox>
    </p>
    <p>
        <asp:Label ID="lblPhone" associatedcontrolid="txtPhone" runat="server" Text="Phone:"></asp:Label>
        <asp:TextBox ID="txtPhone" runat="server"></asp:TextBox>
    </p>
    <p>
    	<asp:Label ID="lblState" associatedcontrolid="ddlState" runat="server" Text="State/Province:"></asp:Label>
        <asp:DropDownList ID="ddlState" runat="server"></asp:DropDownList>
    </p>
    <p> 
        <asp:Label ID="lblZip" associatedcontrolid="txtZip" runat="server" Text="Zip:"></asp:Label>
        <asp:TextBox ID="txtZip" runat="server"></asp:TextBox>
    </p>
    <p>
        <asp:RequiredFieldValidator ID="rfvComments" runat="server" ErrorMessage="Please enter your Comments." ControlToValidate="txtComments" Display="None"></asp:RequiredFieldValidator>
        <asp:Label ID="lblComments" associatedcontrolid="txtComments" runat="server" Text="*Comments:"></asp:Label>
        <asp:TextBox ID="txtComments" runat="server" TextMode="MultiLine"></asp:TextBox>
    </p>
    <p class="no-label">
    	<asp:Button ID="btnSubmit" runat="server" class="button" Text="Submit" /> *Required Fields
    </p>
</asp:Panel>