import { Component, HostBinding, HostListener } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  toggleDarkTheme(): void {
    document.body.classList.toggle('dark-theme');
  }


  //  // เก็บค่าตำแหน่งเริ่มต้นของการเลื่อนลง
  //  private prevScrollPos = window.pageYOffset;

  //  // กำหนดค่าสูงสุดที่ Navbar สามารถซ่อนได้
  //  private maxTopValue = -100;
 
  //  // ตรวจจับเหตุการณ์ scroll
  //  @HostListener('window:scroll', ['$event'])
  //  onScroll(event: Event): void {
  //    // คำนวณหาระยะทางที่เลื่อนมา
  //    const currentScrollPos = window.pageYOffset;
 
  //    // ตรวจสอบว่าเรากำลังเลื่อนลงหรือไม่
  //    if (this.prevScrollPos > currentScrollPos) {
  //      // ถ้าเรากำลังเลื่อนลง, แสดง Navbar
  //      this.setNavbarTop('0px');
  //    } else {
  //      // ถ้าเรากำลังเลื่อนขึ้นหรือไม่เลื่อน, ซ่อน Navbar
  //      this.setNavbarTop(this.maxTopValue + 'px');
  //    }
 
  //    // บันทึกตำแหน่งปัจจุบันสำหรับการเปรียบเทียบในการเลื่อนครั้งถัดไป
  //    this.prevScrollPos = currentScrollPos;
  //  }
 
  //  // เปลี่ยนแปลงค่า top ของ Navbar
  //  private setNavbarTop(value: string): void {
  //    const navbar = document.querySelector('.header') as HTMLElement;
  //    navbar.style.top = value;
  //  }

  isNavbarVisible = true;
  prevScrollpos = window.pageYOffset;
  isDropdownOpen = false;

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const currentScrollPos = window.pageYOffset;

    if (this.prevScrollpos > currentScrollPos) {
      // Scroll up, show navbar
      this.isNavbarVisible = true;
    } else {
      // Scroll down, hide navbar
      this.isNavbarVisible = false;
    }

    this.prevScrollpos = currentScrollPos;
  }

  // toggleDropdown() {
  //   this.isDropdownOpen = !this.isDropdownOpen;
  // }
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  closeMenu() {
    this.isMenuOpen = false;
  }
  
}
