import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AllCoursesService } from 'src/app/services/all-courses.service';
import { faShoppingBag, faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { DomSanitizer} from '@angular/platform-browser';
import { faLock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-course-details-info',
  templateUrl: './course-details-info.component.html',
  styleUrls: ['./course-details-info.component.scss'],
})
export class CourseDetailsInfoComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private allCourseService: AllCoursesService,
    private sanitizer:DomSanitizer
  ) {}

  public selectedCourseUrl: any;
  public allCourse: any;
  public course: any;
  public faShoppingBag = faShoppingBag;
  public faCartPlus = faCartPlus;
  public modules: any;
  public activePlayVideo: any;
  public playFirstModuleVideo: any;
  public playFirstVideo = true;
  public currentWatchModule: any;
  public faLock = faLock;

  ngOnInit(): void {
    this.selectedCourseUrl = this.route.snapshot.paramMap.get('course_url');
    this.allCourseService.getCourseDetailsBySlug(this.selectedCourseUrl).subscribe((resp) => {
      this.course = resp.result;
    })
    this.modules = this.allCourseService.loadCourseModules();
    this.playFirstModuleVideo = this.sanitizer.bypassSecurityTrustResourceUrl(this.modules[0].videoLink);
    this.currentWatchModule = this.modules[0].moduleName;
  }
  playVideo(module: any) {
    this.playFirstVideo = false;
    this.activePlayVideo = this.sanitizer.bypassSecurityTrustResourceUrl(module.videoLink);
    this.currentWatchModule = module.moduleName;
  }
}
