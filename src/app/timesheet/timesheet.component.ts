import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {
  FormBuilder,
  FormGroup,
  FormArray,
  Validators,
  FormControl,
} from '@angular/forms';
import { DatePipe } from '@angular/common';
import { TimeSheetDay } from '../timesheetday';
import { TimeSheet } from '../timesheet';

@Component({
  selector: 'app-timesheet',
  templateUrl: './timesheet.component.html',
  styleUrls: ['./timesheet.component.css'],
})
export class TimesheetComponent implements OnInit {
  // TimesheetEntities

  TotalHours: number = 0;
  LeaveHours: number = 0;
  HolidayHours: number = 0;
  Approver: string = 'Manager';
  Status: string = 'Submitted';
  TotalColumns: number = 15;

  TimesheetDays: TimeSheetDay[] = [];
  TimesheetDayss: any[] = [];

  // When you submit the Date it will take that Date
  startDate: Date = new Date();

  // This is section is About calender functionality
  dayNumbers: number[] = [];
  monthName: string | undefined;
  TotalDays: number | undefined;
  Month: string = '';

  Days: number[] = [];

  onSubmit() {
    const startDate = new Date(this.startDate);
    const EnteredDate = startDate.getDate();
    const monthValue = startDate.getMonth();
    const getYear = startDate.getFullYear();
    if (monthValue == 0) {
      this.monthName = 'January';
    } else if (monthValue == 1) {
      this.monthName = 'February';
    } else if (monthValue == 2) {
      this.monthName = 'March';
    } else if (monthValue == 3) {
      this.monthName = 'April';
    } else if (monthValue == 4) {
      this.monthName = 'May';
    } else if (monthValue == 5) {
      this.monthName = 'June';
    } else if (monthValue == 6) {
      this.monthName = 'July';
    } else if (monthValue == 7) {
      this.monthName = 'August';
    } else if (monthValue == 8) {
      this.monthName = 'September';
    } else if (monthValue == 9) {
      this.monthName = 'October';
    } else if (monthValue == 10) {
      this.monthName = 'November';
    } else {
      this.monthName = 'December';
    }

    //Initalizing the month
    this.Month += this.monthName;

    //finding totaldays in month
    this.TotalDays = new Date(getYear, monthValue + 1, 0).getDate();

    //checking the date if is below than 15 then date should start from 0 to 15 otherwise 15 to
    // rest of the numbers
    if (EnteredDate <= 15) {
      for (let i = 1; i <= 15; i++) {
        this.dayNumbers.push(i);
        this.TotalColumns = 15;
      }
    } else if (EnteredDate >= 15) {
      for (let i = 16; i <= this.TotalDays; i++) {
        this.dayNumbers.push(i);
        this.TotalColumns = this.TotalDays - 15;
      }
    }
  }

  form: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder, private datePipe: DatePipe) {}

  ngOnInit() {
    this.form = new FormGroup({
      startDate: new FormControl(),
      endDate: new FormControl(),
      totalHours: new FormControl('', [Validators.required]),
      leaveHours: new FormControl('', [Validators.required]),
      holidayHours: new FormControl('', [Validators.required]),
      approver: new FormControl('', [Validators.required]),
      status: new FormControl('', [Validators.required]),
      timeSheetDayss : new FormControl('', [Validators.required]),
      employee: new FormControl("", [Validators.required,])
    });
  }

  get items(): FormArray {
    return this.form.get('items') as FormArray;
  }

  addItem1() {
    const startDate = new Date(this.startDate);
    const EnteredDate = startDate.getDate();
    const monthValue = startDate.getMonth();
    const getYear = startDate.getFullYear();

    let LastDay = new Date(getYear, monthValue, 0).getDate();

    let startDay = 1;
    if (EnteredDate > 15) {
      startDay = 16;
    } else {
      LastDay = 15;
    }

    for (let i = startDay; i <= LastDay; i++) {
      const datestring = `${getYear}-${monthValue + 1}-${i}`;
      const datestring1 = this.datePipe.transform(datestring, 'yyyy-MM-dd');
      this.TimesheetDays.push({ date: datestring1 + '', hours: 0 });
      this.Days.push(i);
    }

    this.TimesheetDayss.push({ TimesheetDays: this.TimesheetDays });

    console.log(this.TimesheetDayss);
  }

  // Dynammic added Timesheet
  addItem() {
    const item = this.fb.group({
      project: ['', Validators.required],
      day1: ['', Validators.required],
      day2: ['', Validators.required],
      day3: ['', Validators.required],
      day4: ['', Validators.required],
      day5: ['', Validators.required],
      day6: ['', Validators.required],
      day7: ['', Validators.required],
      day8: ['', Validators.required],
      day9: ['', Validators.required],
      day10: ['', Validators.required],
      day11: ['', Validators.required],
      day12: ['', Validators.required],
      day13: ['', Validators.required],
      day14: ['', Validators.required],
      day15: ['', Validators.required],
      day16: ['', Validators.required],
    });
    this.items.push(item);
  }

  onsubmit() {
    console.log(this.form.value.items);

    for (const element of this.form.value.items) {
      const item: any = element;

      for (const key in item) {
        if (key.startsWith('day')) {
          const hours: number = parseInt(item[key]) || 0;
          this.TotalHours += hours;
        }
      }
    }

    console.log(this.TotalHours);

    console.log(this.form.value);
  }

  onsubmit1() {
    console.log(this.form.value);
  }

  check: boolean = false;
  myfunction() {
    this.check = true;
  }
}
