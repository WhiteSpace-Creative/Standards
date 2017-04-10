
Imports System.Runtime.CompilerServices

Namespace WSC.Extensions
    Public Module StringExtensions
        <Extension()>
        Public Function SplitNewLine(input As String) As List(Of String)
            Return input.Split(New String() {vbCrLf, vbLf}, StringSplitOptions.RemoveEmptyEntries).ToList
        End Function

        <Extension()>
        Public Function GetDomainName(input As String) As String
            Dim uri As New Uri(input)
            Return uri.Host.Split(".").Reverse().Skip(1).FirstOrDefault()
        End Function
    End Module

End Namespace