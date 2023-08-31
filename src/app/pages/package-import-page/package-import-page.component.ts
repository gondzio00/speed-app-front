import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {HttpEventType, HttpResponse} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {FileUploadService} from "../../_services/file-upload.service";
import {NzNotificationService} from "ng-zorro-antd/notification";
import {NzUploadFile} from "ng-zorro-antd/upload";

@Component({
  selector: 'app-package-import-page',
  templateUrl: './package-import-page.component.html',
  styleUrls: ['./package-import-page.component.scss']
})
export class PackageImportPageComponent implements OnInit {
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


  createBasicNotification(): void {
    console.log("not")
    this.notification.template(this.successNotificationTemplate);
  }

  ngOnInit(): void {
    this.fileInfos = this.uploadService.getFiles();
  }

  selectFile(event: any): void {
    if (event.target.files && event.target.files[0]) {
      const file: File = event.target.files[0];
      this.currentFile = file;
      this.fileName = this.currentFile.name;
    } else {
      this.fileName = 'Select File';
    }
  }

  upload(file: any): void {
    this.progress = 0;
    this.message = "";

    if (file) {
      this.uploadService.uploadPackages(file).subscribe(
        (event: any) => {
          if (event.type === HttpEventType.UploadProgress) {
            this.progress = Math.round(100 * event.loaded / event.total);
          } else if (event instanceof HttpResponse) {
            this.message = event.body.message;
            this.fileInfos = this.uploadService.getFiles();
            this.createBasicNotification()
          }
        },
        (err: any) => {
          console.log(err);
          this.createBasicNotification()
          this.progress = 0;

          if (err.error && err.error.message) {
            this.message = err.error.message;
          } else {
            this.message = 'Could not upload the file!';
          }

          this.currentFile = undefined;
        });
    }

  }
}
