import {Component, OnInit} from '@angular/core';
import {Observable, of} from "rxjs";
import {HttpEventType, HttpResponse} from "@angular/common/http";
import {FileUploadService} from "../../_services/file-upload.service";
import {NzNotificationService} from "ng-zorro-antd/notification";
import {NzUploadChangeParam, NzUploadFile} from "ng-zorro-antd/upload";

@Component({
  selector: 'app-manipulation-data-import-page',
  templateUrl: './manipulation-data-import-page.component.html',
  styleUrls: ['./manipulation-data-import-page.component.scss']
})
export class ManipulationDataImportPageComponent implements OnInit {
  currentFile?: File;
  progress = 0;
  message = '';

  fileName = 'Select File';
  fileInfos?: Observable<any>;

  constructor(private uploadService: FileUploadService, private notification: NzNotificationService) {
  }

  ngOnInit(): void {
    this.fileInfos = this.uploadService.getFiles();
  }

  addFile(file: NzUploadFile): Observable<string> {
    return of("https://speed-app.onrender.com/api/manipulation/upload")
  }

  uploadSuccessNotification(): void {
    this.notification.create(
      "success",
      'Import danych dodatkowych',
      'Pomyślnie zaimportowano plik z listą danych dodatkowych'
    );
  }

  uploadFailedNotification(): void {
    this.notification.create(
      "error",
      'Import danych dodatkowych',
      'Nie udało się zaimportować pliku z listą danych dodatkowych'
    );
  }

  handleChange(info: NzUploadChangeParam) {
    if (info.file.status === 'done') {
      this.uploadSuccessNotification()
    } else if (info.file.status === 'error') {
      this.uploadFailedNotification()
    }
  }
}
