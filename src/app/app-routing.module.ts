import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/pages/home/home.component";
import { ContactComponent } from "./components/pages/contact/contact.component";
import { AboutComponent } from "./components/pages/about/about.component";
import { CourseComponent } from "./components/pages/course/course.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "contacto", component: ContactComponent },
  { path: "nosotros", component: AboutComponent },
  { path: "cursos", component: CourseComponent },
  { pathMatch: "full", path: "**", redirectTo: "" },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
