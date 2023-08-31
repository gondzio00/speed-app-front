import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {HttpEventType, HttpResponse} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {FileUploadService} from "../../_services/file-upload.service";
import {NzNotificationService} from "ng-zorro-antd/notification";
import {NzUploadChangeParam, NzUploadFile} from "ng-zorro-antd/upload";

@Component({
  selector: 'app-package-import-page',
  templateUrl: './package-import-page.component.html',
  styleUrls: ['./package-import-page.component.scss']
})
export class PackageImportPageComponent {
  currentFile?: File;
  progress = 0;
  message = '';

  fileName = 'Select File';
  fileInfos?: Observable<any>;

  @ViewChild('successNotificationTemplate') successNotificationTemplate: TemplateRef<{}>;

  constructor(private uploadService: FileUploadService, private notification: NzNotificationService) {
  }

  addFile(file: NzUploadFile): Observable<string> {
    return of("https://speed-app.onrender.com/api/packages/upload")
  }

  uploadSuccessNotification(): void {
    this.notification.create(
      "success",
      'Import paczek',
      'Pomyślnie zaimportowano plik z listą paczek'
    );
  }

  uploadFailedNotification(): void {
    this.notification.create(
      "error",
      'Import paczek',
      'Nie udało się zaimportować pliku z listą paczek'
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
