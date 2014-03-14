<%@ Control Language="VB" AutoEventWireup="false" CodeFile="ContactUs.ascx.vb" Inherits="usercontrols_ContactUs" %>

<asp:Panel ID="pnlForm" runat="server" CssClass="form">
    <asp:ValidationSummary ID="ValidationSummary" runat="server" CssClass="error" ForeColor="" HeaderText="Please correct the following problems" />
    <p>
        <asp:Label ID="Label1" associatedcontrolid="txtFirstName" runat="server" Text="First Name:"></asp:Label>
        <asp:TextBox ID="txtFirstName" runat="server"></asp:TextBox>
    </p>
    <p>
        <asp:Label ID="Label2" associatedcontrolid="txtLastName" runat="server" Text="Last Name:"></asp:Label>
        <asp:TextBox ID="txtLastName" runat="server"></asp:TextBox>
    </p>
    <p>
        <asp:RequiredFieldValidator ID="RequiredFieldValidator1" runat="server" ErrorMessage="Please enter your Email." ControlToValidate="txtEmail" Display="None"></asp:RequiredFieldValidator>
        <asp:RegularExpressionValidator ID="RegularExpressionValidator1" runat="server" ErrorMessage="Please enter a valid Email." ValidationExpression="\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*" ControlToValidate="txtEmail" Display="None"></asp:RegularExpressionValidator>
        <asp:Label ID="Label3" associatedcontrolid="txtEmail" runat="server" Text="*Email:"></asp:Label>
        <asp:TextBox ID="txtEmail" runat="server"></asp:TextBox>
    </p>
    <p>
        <asp:Label ID="Label4" associatedcontrolid="txtCompany" runat="server" Text="Company:"></asp:Label>
        <asp:TextBox ID="txtCompany" runat="server"></asp:TextBox>
    </p>
    <p>
        <asp:Label ID="Label5" associatedcontrolid="txtPhone" runat="server" Text="Phone:"></asp:Label>
        <asp:TextBox ID="txtPhone" runat="server"></asp:TextBox>
    </p>
    <p> 
        <asp:RequiredFieldValidator ID="RequiredFieldValidator2" runat="server" ErrorMessage="Please enter your Zip." ControlToValidate="txtZip" Display="None"></asp:RequiredFieldValidator>
        <asp:Label ID="Label6" associatedcontrolid="txtZip" runat="server" Text="Zip:"></asp:Label>
        <asp:TextBox ID="txtZip" runat="server"></asp:TextBox>
    </p>
    <p>
        <asp:RequiredFieldValidator ID="RequiredFieldValidator3" runat="server" ErrorMessage="Please enter your Comments." ControlToValidate="txtComments" Display="None"></asp:RequiredFieldValidator>
        <asp:Label ID="Label7" associatedcontrolid="txtComments" runat="server" Text="Comments:"></asp:Label>
        <asp:TextBox ID="txtComments" runat="server" TextMode="MultiLine"></asp:TextBox>
    </p>
    <p class="no-label">
    	<asp:Button ID="btnSubmit" runat="server" Text="Submit" /> *Required Fields
    </p>
</asp:Panel>