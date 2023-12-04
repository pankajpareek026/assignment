import humanFormat from "human-format";
var newNumberFormat = humanFormat.Scale.create(["", "K", "M", "B", "T", "QR", "QI"], 1000);
function numberFomator(number,decimalPlace)
{
    
  return  humanFormat(number, { scale: newNumberFormat, decimals: decimalPlace })
}
export {numberFomator}