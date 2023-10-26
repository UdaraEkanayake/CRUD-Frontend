import { Component, OnInit } from '@angular/core';
import { StudentDataService } from 'src/app/services/student-data.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit{
     stdData: any;
     constructor(private studentDataService: StudentDataService){}

     ngOnInit(): void {
      this.studentDataService.getData().subscribe((data) => {
      this.stdData = data;
      });
   }
}
