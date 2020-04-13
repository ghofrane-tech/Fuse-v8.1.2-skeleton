import { Injectable } from "@angular/core";
import {
    Router,
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot
} from "@angular/router";

import { AuthenticationService } from "../_services";

@Injectable({ providedIn: "root" })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const currentUser = this.authenticationService.currentUserValue;
        console.log("heyy");
        if (currentUser) {
            // logged in so return true
            console.log("currentUser");
            console.log(currentUser);
            return true;
        }

        // not logged in so redirect to login page with the return url
        console.log("heyy");
        this.router.navigate(["pages/auth/login"]);
        return false;
    }
}
