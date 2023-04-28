import { Employee_temp } from "./employee_tmp";
import { TimeSheetDays } from "./timesheetdays";

export class TimeSheet{
  submittedOn: string | undefined;
  startDate: string | undefined;
  endDate: string | undefined;
  totalHours: number | undefined;
  leaveHours : number | undefined;
  holidayHours : number | undefined;
  approver : string | undefined;
  status : string | undefined;
  timeSheetDayss : TimeSheetDays[] = [];
  employee: Employee_temp | undefined;
}

// @Column(name = "START_DATE")
// private LocalDate startDate;
// @Column(name = "END_DATE")
// private LocalDate endDate;
// @Column(name = "TOTAL_HOURS")
// private int totalHours;
// @Column(name = "LEAVE_HOURS")
// private int leaveHours;
// @Column(name = "HOLIDAY_HOURS")
// private int holidayHours;
// @Column(name = "APPROVER")
// private String approver;
// @Column(name = "STATUS")
// private String status;
// @OneToMany(targetEntity = TimeSheetDays.class, cascade = {CascadeType.PERSIST, CascadeType.DETACH,CascadeType.MERGE,CascadeType.REFRESH})
// @JoinColumn(name = "TIMESHEETDAYS_ID")
// private Set<TimeSheetDays> timeSheetDayss = new HashSet<>();
// @ManyToOne(targetEntity = Employee.class, cascade = {CascadeType.PERSIST, CascadeType.DETACH,CascadeType.MERGE,CascadeType.REFRESH})
// @JoinColumn(name = "EMPLOYEE_ID")
// private Employee employee;
