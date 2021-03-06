import { Component, OnInit } from '@angular/core';
import { FileExcelService } from 'src/app/services/file-excel.service';

@Component({
  selector: 'app-file-excel',
  templateUrl: './file-excel.component.html',
  styleUrls: ['./file-excel.component.css']
})
export class FileExcelComponent implements OnInit {

  constructor(public ete: FileExcelService) { }

  ngOnInit(): void {
  }

  title = 'angular-export-to-excel';

  dataForExcel: any = [];

  empPerformance = [
    { ID: 10011, NAME: "A", DEPARTMENT: "Sales", MONTH: "Jan", YEAR: 2020, SALES: 132412, CHANGE: 12, LEADS: 35 },
    { ID: 10012, NAME: "A", DEPARTMENT: "Sales", MONTH: "Feb", YEAR: 2020, SALES: 232324, CHANGE: 2, LEADS: 443 },
    { ID: 10013, NAME: "A", DEPARTMENT: "Sales", MONTH: "Mar", YEAR: 2020, SALES: 542234, CHANGE: 45, LEADS: 345 },
    { ID: 10014, NAME: "A", DEPARTMENT: "Sales", MONTH: "Apr", YEAR: 2020, SALES: 223335, CHANGE: 32, LEADS: 234 },
    { ID: 10015, NAME: "A", DEPARTMENT: "Sales", MONTH: "May", YEAR: 2020, SALES: 455535, CHANGE: 21, LEADS: 12 },
  ];


  exportToExcel() {

    this.empPerformance.forEach((row: any) => {
      this.dataForExcel.push(Object.values(row))
    })

    let reportData = {
      title: 'Employee Sales Report - Jan 2020',
      data: this.dataForExcel,
      headers: Object.keys(this.empPerformance[0])
    }

    this.ete.exportExcel(reportData);
  }
}
