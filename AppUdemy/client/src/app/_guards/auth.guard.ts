import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AccountService } from '../_services/account.service';

@Injectable({ //guards es parecido al interceptor pero para la parte de frontend solo
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private accountService: AccountService, private toastr: ToastrService){}

  canActivate(): Observable<boolean>{
    return this.accountService.currentUser$.pipe(
      map(user => {  //map aplica una funcion a cada valor emitido
        if (user) return true;
        this.toastr.error('You shall not pass!')
      })
    )
  }
  
}
