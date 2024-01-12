import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArrayToCsvService {

  constructor() { }

  arrayToCsv(data){
  return data.map(row =>
    row
    .map(String)  // convert every value to string
    .map(v => v.replaceAll('"', '""'))  // escape double quotes
   // .map(v => `"${v}"`)  // quote it
    .join(',')  // comma-separated
  ).join('\r\n');  // rows starting on new lines
}

 downloadBlob(content, filename, contentType) {
  // Create a blob
  var blob = new Blob([content], { type: contentType });
  var url = URL.createObjectURL(blob);

  // Create a link to download it
  var pom = document.createElement('a');
  pom.href = url;
  pom.setAttribute('download', filename);
  pom.click();
}


// in general content-type is 'text/csv;charset=utf-8;'

}
