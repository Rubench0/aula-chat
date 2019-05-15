import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userStatus'
})
export class UserStatusPipe implements PipeTransform {
  public status;
  transform(value: any) {
    switch (value) {
      case 1:
        this.status = 'assets/img/status_live.png';
      break;
      case 2:
        this.status = 'assets/img/status_oc.png';
      break;
      case 3:
        this.status = 'assets/img/status_offline.png';
      break;
    }
    return this.status;
  }

}
