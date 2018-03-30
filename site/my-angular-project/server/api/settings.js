function Settings() {
  this.web3provider = "http://127.0.0.1:8546";
  this.cargoCoinAddress = '0x6661fd16e676a73b07dd873f6beadc2a7db7305a';
  this.ccJsonB64 = "W3siY29uc3RhbnQiOnRydWUsImlucHV0cyI6W10sIm5hbWUiOiJuYW1lIiwib3V0cHV0cyI6W3sibmFtZSI6IiIsInR5cGUiOiJzdHJpbmcifV0sInBheWFibGUiOmZhbHNlLCJ0eXBlIjoiZnVuY3Rpb24ifSx7ImNvbnN0YW50IjpmYWxzZSwiaW5wdXRzIjpbeyJuYW1lIjoiX3NwZW5kZXIiLCJ0eXBlIjoiYWRkcmVzcyJ9LHsibmFtZSI6Il9hbW91bnQiLCJ0eXBlIjoidWludDI1NiJ9XSwibmFtZSI6ImFwcHJvdmUiLCJvdXRwdXRzIjpbeyJuYW1lIjoic3VjY2VzcyIsInR5cGUiOiJib29sIn1dLCJwYXlhYmxlIjpmYWxzZSwidHlwZSI6ImZ1bmN0aW9uIn0seyJjb25zdGFudCI6ZmFsc2UsImlucHV0cyI6W3sibmFtZSI6Il9vd25lciIsInR5cGUiOiJhZGRyZXNzIn1dLCJuYW1lIjoic2V0T3duZXIiLCJvdXRwdXRzIjpbXSwicGF5YWJsZSI6ZmFsc2UsInR5cGUiOiJmdW5jdGlvbiJ9LHsiY29uc3RhbnQiOnRydWUsImlucHV0cyI6W10sIm5hbWUiOiJ0b3RhbFN1cHBseSIsIm91dHB1dHMiOlt7Im5hbWUiOiJ0b3RhbFN1cHBseSIsInR5cGUiOiJ1aW50MjU2In1dLCJwYXlhYmxlIjpmYWxzZSwidHlwZSI6ImZ1bmN0aW9uIn0seyJjb25zdGFudCI6dHJ1ZSwiaW5wdXRzIjpbXSwibmFtZSI6Il9hZGRyZXNzIiwib3V0cHV0cyI6W3sibmFtZSI6IiIsInR5cGUiOiJhZGRyZXNzIn1dLCJwYXlhYmxlIjpmYWxzZSwidHlwZSI6ImZ1bmN0aW9uIn0seyJjb25zdGFudCI6ZmFsc2UsImlucHV0cyI6W3sibmFtZSI6Il9mcm9tIiwidHlwZSI6ImFkZHJlc3MifSx7Im5hbWUiOiJfdG8iLCJ0eXBlIjoiYWRkcmVzcyJ9LHsibmFtZSI6Il9hbW91bnQiLCJ0eXBlIjoidWludDI1NiJ9XSwibmFtZSI6InRyYW5zZmVyRnJvbSIsIm91dHB1dHMiOlt7Im5hbWUiOiJzdWNjZXNzIiwidHlwZSI6ImJvb2wifV0sInBheWFibGUiOmZhbHNlLCJ0eXBlIjoiZnVuY3Rpb24ifSx7ImNvbnN0YW50Ijp0cnVlLCJpbnB1dHMiOltdLCJuYW1lIjoiZGVjaW1hbHMiLCJvdXRwdXRzIjpbeyJuYW1lIjoiIiwidHlwZSI6InVpbnQ4In1dLCJwYXlhYmxlIjpmYWxzZSwidHlwZSI6ImZ1bmN0aW9uIn0seyJjb25zdGFudCI6dHJ1ZSwiaW5wdXRzIjpbeyJuYW1lIjoibWljcm9DQyIsInR5cGUiOiJ1aW50MjU2In1dLCJuYW1lIjoiY2FuQnV5Iiwib3V0cHV0cyI6W3sibmFtZSI6ImNhbiIsInR5cGUiOiJib29sIn1dLCJwYXlhYmxlIjpmYWxzZSwidHlwZSI6ImZ1bmN0aW9uIn0seyJjb25zdGFudCI6ZmFsc2UsImlucHV0cyI6W3sibmFtZSI6InJhdGlvIiwidHlwZSI6InVpbnQyNTYifV0sIm5hbWUiOiJzZXRDb252ZXJzaW9uUmF0aW8iLCJvdXRwdXRzIjpbXSwicGF5YWJsZSI6ZmFsc2UsInR5cGUiOiJmdW5jdGlvbiJ9LHsiY29uc3RhbnQiOmZhbHNlLCJpbnB1dHMiOlt7Im5hbWUiOiJfdG8iLCJ0eXBlIjoiYWRkcmVzcyJ9LHsibmFtZSI6Il9hbW91bnQiLCJ0eXBlIjoidWludDI1NiJ9LHsibmFtZSI6InBlcmNlbnRzIiwidHlwZSI6InVpbnQyNTYifV0sIm5hbWUiOiJ0cmFuc2ZlcldpdGhGZWUiLCJvdXRwdXRzIjpbeyJuYW1lIjoic3VjY2VzcyIsInR5cGUiOiJib29sIn1dLCJwYXlhYmxlIjpmYWxzZSwidHlwZSI6ImZ1bmN0aW9uIn0seyJjb25zdGFudCI6ZmFsc2UsImlucHV0cyI6W3sibmFtZSI6Im1pY3JvQ0MiLCJ0eXBlIjoidWludDI1NiJ9XSwibmFtZSI6ImNjMmV0aGVyIiwib3V0cHV0cyI6W10sInBheWFibGUiOmZhbHNlLCJ0eXBlIjoiZnVuY3Rpb24ifSx7ImNvbnN0YW50Ijp0cnVlLCJpbnB1dHMiOltdLCJuYW1lIjoiZ2V0T3duZXJCYWxhbmNlIiwib3V0cHV0cyI6W3sibmFtZSI6Il9iYWxhbmNlIiwidHlwZSI6InVpbnQyNTYifV0sInBheWFibGUiOmZhbHNlLCJ0eXBlIjoiZnVuY3Rpb24ifSx7ImNvbnN0YW50Ijp0cnVlLCJpbnB1dHMiOltdLCJuYW1lIjoiZ2V0Q29udmVyc2lvblJhdGlvIiwib3V0cHV0cyI6W3sibmFtZSI6InJhdGlvIiwidHlwZSI6InVpbnQyNTYifV0sInBheWFibGUiOmZhbHNlLCJ0eXBlIjoiZnVuY3Rpb24ifSx7ImNvbnN0YW50Ijp0cnVlLCJpbnB1dHMiOlt7Im5hbWUiOiJhZGRyIiwidHlwZSI6ImFkZHJlc3MifV0sIm5hbWUiOiJnZXRCYWxhbmNlSW5XZWkiLCJvdXRwdXRzIjpbeyJuYW1lIjoiIiwidHlwZSI6InVpbnQyNTYifV0sInBheWFibGUiOmZhbHNlLCJ0eXBlIjoiZnVuY3Rpb24ifSx7ImNvbnN0YW50Ijp0cnVlLCJpbnB1dHMiOlt7Im5hbWUiOiJfb3duZXIiLCJ0eXBlIjoiYWRkcmVzcyJ9XSwibmFtZSI6ImJhbGFuY2VPZiIsIm91dHB1dHMiOlt7Im5hbWUiOiJiYWxhbmNlIiwidHlwZSI6InVpbnQyNTYifV0sInBheWFibGUiOmZhbHNlLCJ0eXBlIjoiZnVuY3Rpb24ifSx7ImNvbnN0YW50Ijp0cnVlLCJpbnB1dHMiOltdLCJuYW1lIjoiZ2V0T3duZXIiLCJvdXRwdXRzIjpbeyJuYW1lIjoiX293bmVyIiwidHlwZSI6ImFkZHJlc3MifV0sInBheWFibGUiOmZhbHNlLCJ0eXBlIjoiZnVuY3Rpb24ifSx7ImNvbnN0YW50Ijp0cnVlLCJpbnB1dHMiOltdLCJuYW1lIjoic3ltYm9sIiwib3V0cHV0cyI6W3sibmFtZSI6IiIsInR5cGUiOiJzdHJpbmcifV0sInBheWFibGUiOmZhbHNlLCJ0eXBlIjoiZnVuY3Rpb24ifSx7ImNvbnN0YW50Ijp0cnVlLCJpbnB1dHMiOlt7Im5hbWUiOiJhIiwidHlwZSI6InVpbnQyNTYifSx7Im5hbWUiOiJiIiwidHlwZSI6InVpbnQyNTYifV0sIm5hbWUiOiJkaXYiLCJvdXRwdXRzIjpbeyJuYW1lIjoicSIsInR5cGUiOiJ1aW50MjU2In1dLCJwYXlhYmxlIjpmYWxzZSwidHlwZSI6ImZ1bmN0aW9uIn0seyJjb25zdGFudCI6ZmFsc2UsImlucHV0cyI6W3sibmFtZSI6Il90byIsInR5cGUiOiJhZGRyZXNzIn0seyJuYW1lIjoiX2Ftb3VudCIsInR5cGUiOiJ1aW50MjU2In1dLCJuYW1lIjoidHJhbnNmZXIiLCJvdXRwdXRzIjpbeyJuYW1lIjoic3VjY2VzcyIsInR5cGUiOiJib29sIn1dLCJwYXlhYmxlIjpmYWxzZSwidHlwZSI6ImZ1bmN0aW9uIn0seyJjb25zdGFudCI6dHJ1ZSwiaW5wdXRzIjpbeyJuYW1lIjoiX293bmVyIiwidHlwZSI6ImFkZHJlc3MifSx7Im5hbWUiOiJfc3BlbmRlciIsInR5cGUiOiJhZGRyZXNzIn1dLCJuYW1lIjoiYWxsb3dhbmNlIiwib3V0cHV0cyI6W3sibmFtZSI6InJlbWFpbmluZyIsInR5cGUiOiJ1aW50MjU2In1dLCJwYXlhYmxlIjpmYWxzZSwidHlwZSI6ImZ1bmN0aW9uIn0seyJjb25zdGFudCI6ZmFsc2UsImlucHV0cyI6W10sIm5hbWUiOiJldGhlcjJjYyIsIm91dHB1dHMiOltdLCJwYXlhYmxlIjp0cnVlLCJ0eXBlIjoiZnVuY3Rpb24ifSx7ImlucHV0cyI6W10sInBheWFibGUiOmZhbHNlLCJ0eXBlIjoiY29uc3RydWN0b3IifSx7ImFub255bW91cyI6ZmFsc2UsImlucHV0cyI6W3siaW5kZXhlZCI6dHJ1ZSwibmFtZSI6Il9mcm9tIiwidHlwZSI6ImFkZHJlc3MifSx7ImluZGV4ZWQiOnRydWUsIm5hbWUiOiJfdG8iLCJ0eXBlIjoiYWRkcmVzcyJ9LHsiaW5kZXhlZCI6ZmFsc2UsIm5hbWUiOiJfdmFsdWUiLCJ0eXBlIjoidWludDI1NiJ9XSwibmFtZSI6IlRyYW5zZmVyIiwidHlwZSI6ImV2ZW50In0seyJhbm9ueW1vdXMiOmZhbHNlLCJpbnB1dHMiOlt7ImluZGV4ZWQiOnRydWUsIm5hbWUiOiJfb3duZXIiLCJ0eXBlIjoiYWRkcmVzcyJ9LHsiaW5kZXhlZCI6dHJ1ZSwibmFtZSI6Il9zcGVuZGVyIiwidHlwZSI6ImFkZHJlc3MifSx7ImluZGV4ZWQiOmZhbHNlLCJuYW1lIjoiX3ZhbHVlIiwidHlwZSI6InVpbnQyNTYifV0sIm5hbWUiOiJBcHByb3ZhbCIsInR5cGUiOiJldmVudCJ9XQ==";
};

module.exports = function() {
  var settings = new Settings();
  return settings;
}