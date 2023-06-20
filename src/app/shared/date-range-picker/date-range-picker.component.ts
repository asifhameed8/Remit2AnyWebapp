import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  ChangeDetectionStrategy,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  NgbDate,
  NgbDatepickerModule,
  NgbDateParserFormatter,
  NgbDateStruct,
} from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';

const now = moment();

@Component({
  selector: 'app-date-range-picker',
  standalone: true,
  imports: [CommonModule, NgbDatepickerModule],
  templateUrl: './date-range-picker.component.html',
  styleUrls: ['./date-range-picker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DateRangePickerComponent implements OnChanges {
  @Input() resetDate: boolean = false;
  @ViewChild('dp') datePicker: any;
  @Output() clear: EventEmitter<void> = new EventEmitter();
  @Output() range: EventEmitter<{ from: string; to: string }> =
    new EventEmitter();
  public maxDate: NgbDateStruct = {
    year: now.year(),
    month: now.month() + 1,
    day: now.date(),
  };

  public hoveredDate: NgbDate | null = null;
  public fromDate: NgbDate | null;
  public toDate: NgbDate | null;

  constructor(private readonly _parserFormatter: NgbDateParserFormatter) {}

  ngOnChanges(change: SimpleChanges) {
    if (change['resetDate'].currentValue) {
      this.datePicker._elRef.nativeElement.value = '';
      this.toDate = this.fromDate = null;
    }
  }

  onDateSelection(date: NgbDate) {
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
    } else if (
      this.fromDate &&
      !this.toDate &&
      date &&
      date.after(this.fromDate)
    ) {
      this.toDate = date;
      // display from date and to date in the datepicker
      this.datePicker._elRef.nativeElement.value = `${this._parserFormatter.format(
        this.fromDate
      )} - ${this._parserFormatter.format(this.toDate)}`;

      // emit the value of an object which contain from and to date in the form utc format
      this.range.emit({
        from: moment(
          `${this.fromDate.month}/${this.fromDate.day}/${this.fromDate.year}`,
          'MM/DD/YYYY'
        ).format(),
        to: moment(
          `${this.toDate.month}/${this.toDate.day}/${this.toDate.year}`,
          'MM/DD/YYYY'
        ).format(),
      });

      this.datePicker.close();
    } else {
      this.toDate = null;
      this.fromDate = date;
    }
  }

  clearDate() {
    this.datePicker._elRef.nativeElement.value = '';
    this.toDate = this.fromDate = null;
    this.clear.emit();
  }

  isHovered(date: NgbDate) {
    return (
      this.fromDate &&
      !this.toDate &&
      this.hoveredDate &&
      date.after(this.fromDate) &&
      date.before(this.hoveredDate)
    );
  }

  isInside(date: NgbDate) {
    return this.toDate && date.after(this.fromDate) && date.before(this.toDate);
  }

  isRange(date: NgbDate) {
    return (
      date.equals(this.fromDate) ||
      (this.toDate && date.equals(this.toDate)) ||
      this.isInside(date) ||
      this.isHovered(date)
    );
  }
}
