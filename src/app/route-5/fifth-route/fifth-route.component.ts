import { Component, OnInit } from '@angular/core';
import { Student } from './student.model';
import * as student from '../../../assets/data/student-data.json';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fifth-route',
  templateUrl: './fifth-route.component.html',
  styleUrls: ['./fifth-route.component.scss']
})


export class FifthRouteComponent implements OnInit {

  public tableHeaders: Array<string> = [];
  public nameOrder: string = "neutral";
  public classOrder: string = "neutral";
  public sectionOrder: string = "neutral";
  public subject1Order: string = "neutral";
  public subject2Order: string = "neutral";
  public subject3Order: string = "neutral";
  public studentList: Student[] = []
  public defaultstudentList: Student[] = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.studentList = (student as any).default;
    this.defaultstudentList = [...this.studentList];
    this.studentList.forEach(student => {
      for (let key of Object.keys(student)) {
        if (!this.tableHeaders.includes(key)) {
          this.tableHeaders.push(key);
        }
      }
    })
  }

 public sort(header: string) {
    console.log(header)
    switch (header) {
      case 'name': this.sortByName();
        break;

      case 'class': this.sortByClass();
        break;

      case 'section': this.sortBySection();
        break;

      case 'sub1': this.sortBySubjects('sub1');
        break;

      case 'sub2': this.sortBySubjects('sub2');
        break;

      case 'sub3': this.sortBySubjects('sub3');
        break;
    }
  }

  public sortByName() {
    this.classOrder = 'neutral';
    this.sectionOrder = 'neutral';
    if (this.nameOrder == 'neutral') {
      this.nameOrder = 'asc';
      this.studentList.sort((a, b) => {
        if (a.name > b.name) {
          return 1;
        }
        else if (a.name < b.name) {
          return -1;
        }
        else {
          return 0;
        }
      });

    }
    else if (this.nameOrder == 'asc') {
      this.nameOrder = 'desc';
      this.studentList.sort((a, b) => {
        if (a.name > b.name) {
          return -1;
        }
        else if (a.name < b.name) {
          return 1;
        }
        else {
          return 0;
        }
      })
    }
    else {
      this.nameOrder = 'neutral';
      this.studentList = [...this.defaultstudentList];
    }
  }


  public sortByClass() {
    this.nameOrder = 'neutral';
    this.sectionOrder = 'neutral';
    if (this.classOrder == 'neutral') {
      this.classOrder = 'asc';
      this.studentList.sort((a, b) => a.class - b.class);
    }
    else if (this.classOrder == 'asc') {
      this.classOrder = 'desc';
      this.studentList.sort((a, b) => b.class - a.class);
    }
    else {
      this.classOrder = 'neutral';
      this.studentList = [...this.defaultstudentList];
    }
  }

  public sortBySection() {
    this.nameOrder = 'neutral';
    this.classOrder = 'neutral';
    if (this.sectionOrder == 'neutral') {
      console.log('hello')
      this.sectionOrder = 'asc';
      this.studentList.sort((a, b) => {
        if (a.section > b.section) return 1;
        else if (a.section < b.section) return -1;
        else return 0;
      });
    }
    else if (this.sectionOrder == 'asc') {
      this.sectionOrder = 'desc';
      this.studentList.sort((a, b) => {
        if (a.section > b.section) return -1;
        else if (a.section < b.section) return 1;
        else return 0;
      });
    }
    else {
      this.sectionOrder = 'neutral';
      this.studentList = [...this.defaultstudentList];
    }
  }

  public sortBySubjects(subject: string) {
    this.nameOrder = 'neutral';
    this.classOrder = 'neutral';
    this.sectionOrder = 'neutral';

    if (subject === 'sub1') {
      this.subject2Order = 'neutral';
      this.subject3Order = 'neutral';
      if (this.subject1Order == 'neutral') {
        this.subject1Order = 'asc';
        this.studentList.sort((a, b) => a.sub1 - b.sub1);
      }
      else if (this.subject1Order == 'asc') {
        this.subject1Order = 'desc';
        this.studentList.sort((a, b) => b.sub1 - a.sub1);
      }
      else {
        this.subject1Order = 'neutral';
        this.studentList = [...this.defaultstudentList];
      }
    }
    else if (subject === 'sub2') {
      this.subject1Order = 'neutral';
      this.subject3Order = 'neutral';
      if (this.subject2Order == 'neutral') {
        this.subject2Order = 'asc';
        this.studentList.sort((a, b) => a.sub2 - b.sub2);
      }
      else if (this.subject2Order == 'asc') {
        this.subject2Order = 'desc';
        this.studentList.sort((a, b) => b.sub2 - a.sub2);
      }
      else {
        this.subject2Order = 'neutral';
        this.studentList = [...this.defaultstudentList];
      }
    }
    else {
      this.subject1Order = 'neutral';
      this.subject2Order = 'neutral';
      if (this.subject3Order == 'neutral') {
        this.subject3Order = 'asc';
        this.studentList.sort((a, b) => a.sub3 - b.sub3);
      }
      else if (this.subject3Order == 'asc') {
        this.subject3Order = 'desc';
        this.studentList.sort((a, b) => b.sub3 - a.sub3);
      }
      else {
        this.subject3Order = 'neutral';
        this.studentList = [...this.defaultstudentList];
      }
    }

  }

  public navigateBack() {
    this.router.navigate(["/"]);
  }

}
