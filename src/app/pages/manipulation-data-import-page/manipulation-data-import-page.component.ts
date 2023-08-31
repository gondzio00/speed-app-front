import {Component, OnInit} from '@angular/core';
import {Observable, of} from "rxjs";
import {HttpEventType, HttpResponse} from "@angular/common/http";
import {FileUploadService} from "../../_services/file-upload.service";
import {NzNotificationService} from "ng-zorro-antd/notification";
import {NzUploadFile} from "ng-zorro-antd/upload";

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

  selectFile(event: any): void {
    if (event.target.files && event.target.files[0]) {
      const file: File = event.target.files[0];
      this.currentFile = file;
      this.fileName = this.currentFile.name;
    } else {
      this.fileName = 'Select File';
    }
  }

  upload(): void {
    this.progress = 0;
    this.message = "";

    if (this.currentFile) {
      this.uploadService.uploadManipulationData(this.currentFile).subscribe(
        (event: any) => {
          if (event.type === HttpEventType.UploadProgress) {
            this.progress = Math.round(100 * event.loaded / event.total);
          } else if (event instanceof HttpResponse) {
            this.message = event.body.message;
            this.fileInfos = this.uploadService.getFiles();
          }
        },
        (err: any) => {
          console.log(err);
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
