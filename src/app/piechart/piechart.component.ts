import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';
import { Chart } from 'node_modules/chart.js';

@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.css']
})
export class PiechartComponent implements OnInit {

  data: [][];
  cases: [][];
  num_cases: any[] = [];
  scen: any;
  i: any;
  cities: any[] = [];
  cases1: [][];
  scen1: any;

  constructor() { }

  ngOnInit(): void {
  }

  onFileChange(evt: any) {
    const target: DataTransfer = <DataTransfer>(evt.target);

    const reader: FileReader = new FileReader();

    reader.onload = (e: any) => {
      const bstr: string = e.target.result;

      const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });

      const wsname : string = wb.SheetNames[0];

      const ws: XLSX.WorkSheet = wb.Sheets[wsname];

      this.data = (XLSX.utils.sheet_to_json(ws, { header: 1 }));

      for(this.i=1;this.i<this.data.length;++this.i) {
        this.cases = this.data[this.i];

        //console.log(this.cases[1]);

        this.scen = this.cases[1];
        this.scen1 = this.cases[0];

        this.num_cases.push(this.scen);
        this.cities.push(this.scen1);
      }

      console.log(this.num_cases[0]);

      var myChart = new Chart("myChart", {
        type: 'pie',
        data: {
            //labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            labels: this.cities,
            datasets: [{
                label: 'Corona Cases',
                //data: [12, 19, 3, 5, 2, 3],
                data: this.num_cases,
                backgroundColor: [
                  'rgba(128, 0, 0, 0.6)',
                  'rgba(255, 69, 0, 0.6)',
                  'rgba(184, 134, 11, 0.6)',
                  'rgba(70, 130, 180, 0.6)',
                  'rgba(154, 205, 50, 0.6)',
                  'rgba(0, 100, 0, 0.6)',
                  'rgba(0, 255, 127, 0.6)',
                  'rgba(255, 99, 71, 0.6)',
                  'rgba(47, 79, 79, 0.6)',
                  'rgba(25, 25, 112, 0.6)',
                  'rgba(255, 160, 122, 0.6)',
                  'rgba(75, 0, 130, 0.6)',
                  'rgba(139, 0, 139, 0.6)',
                  'rgba(188, 143, 143, 0.6)',
                  'rgba(0, 255 , 255, 0.6)',
                  'rgba(255, 215, 0, 1)'
                ],
                borderColor: [
                  'rgba(128, 0, 0, 0.6)',
                  'rgba(255, 69, 0, 0.6)',
                  'rgba(184, 134, 11, 0.6)',
                  'rgba(70, 130, 180, 0.6)',
                  'rgba(154, 205, 50, 0.6)',
                  'rgba(0, 100, 0, 0.6)',
                  'rgba(0, 255, 127, 0.6)',
                  'rgba(255, 99, 71, 0.6)',
                  'rgba(47, 79, 79, 0.6)',
                  'rgba(25, 25, 112, 0.6)',
                  'rgba(255, 160, 122, 0.6)',
                  'rgba(75, 0, 130, 0.6)',
                  'rgba(139, 0, 139, 0.6)',
                  'rgba(188, 143, 143, 0.6)',
                  'rgba(0, 255 , 255, 0.6)',
                  'rgba(255, 215, 0, 1)'
                ],
                borderWidth: 1
            }]
        },
    });
    };

    reader.readAsBinaryString(target.files[0]);
  }

}
