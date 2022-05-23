let xlsx=require("xlsx")  //import dependency xlsx from package.json

function readDataFromExcel(filePath,sheetName){
    
    let wb=xlsx.readFile(filePath)

    //get the sheetNames
    let sheetNames=wb.SheetNames

    //create a worksheet
    let ws= wb.Sheets[sheetName]

    //convert worksheet into json
    let derivedData=xlsx.utils.sheet_to_json(ws)

    return derivedData
  
}
// let data=readDataFromExcel('genericUtility/ExcelData.xlsx', 'Vtiger')
// console.log(data);
module.exports=readDataFromExcel
