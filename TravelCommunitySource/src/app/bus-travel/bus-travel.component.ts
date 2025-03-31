import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { FormsModule } from '@angular/forms'; // Import FormsModule for ngModel

@Component({
  selector: 'app-bus-travel',
  standalone: true, // Standalone component
  imports: [CommonModule, FormsModule], // Import required modules
  template: `
    <div class="container">
      <h1 class="title">🚌 Bus Travel Stories</h1>
      <form (ngSubmit)="addStory()" class="story-form">
        <input [(ngModel)]="newUser" name="user" placeholder="Your Name" required class="input-text">
        <input [(ngModel)]="newTitle" name="title" placeholder="Story Title" required class="input-text">
        <textarea [(ngModel)]="newStory" name="story" placeholder="Share your travel experience" required class="input-textarea"></textarea>
        <input type="file" (change)="onFileSelected($event)" accept="image/*" class="input-file">
        <button type="submit" class="btn">Post</button>
      </form>
      <div class="stories">
        <div *ngFor="let story of stories" class="story">
          <p class="username">🧑‍🚍 <strong>{{ story.user }}</strong></p>
          <h3 class="story-title">📖 {{ story.title }}</h3>
          <p>{{ story.text }}</p>
          <img *ngIf="story.image" [src]="story.image" alt="Travel Photo" class="story-image">
        </div>
      </div>
    </div>
  `,
  styles: [`
    .container { max-width: 700px; margin: auto; text-align: center; font-family: Arial, sans-serif; background: #f4f4f4; padding: 20px; border-radius: 10px; box-shadow: 0px 4px 10px rgba(0,0,0,0.1); }
    .title { font-size: 32px; color: #007BFF; margin-bottom: 20px; font-weight: bold; text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2); border-bottom: 3px solid #007BFF; padding-bottom: 5px; display: inline-block; }
    .story-form { display: flex; flex-direction: column; gap: 10px; align-items: center; }
    .input-text, .input-file, .input-textarea { width: 90%; padding: 10px; border-radius: 5px; border: 1px solid #ccc; font-size: 16px; }
    .input-textarea { height: 100px; resize: vertical; }
    .btn { padding: 10px 15px; font-size: 16px; background: #007BFF; color: white; border: none; border-radius: 5px; cursor: pointer; transition: background 0.3s; }
    .btn:hover { background: #0056b3; }
    .stories { margin-top: 20px; display: flex; flex-direction: column; gap: 15px; }
    .story { background: white; padding: 15px; border-radius: 10px; box-shadow: 0px 2px 5px rgba(0,0,0,0.1); text-align: left; }
    .username { font-size: 18px; color: #007BFF; font-weight: bold; display: flex; align-items: center; gap: 5px; }
    .story-title { font-size: 20px; color: #333; font-weight: bold; margin-top: 5px; }
    .story-image { max-width: 100%; height: auto; margin-top: 10px; border-radius: 10px; box-shadow: 0px 2px 5px rgba(0,0,0,0.1); }
  `]
})
export class BusTravelComponent {
  newUser: string = '';
  newTitle: string = '';
  newStory: string = '';
  stories: { user: string, title: string, text: string, image: string | null }[] = [];
  selectedImage: string | null = null;

  addStory() {
    if (this.newUser.trim() && this.newTitle.trim() && this.newStory.trim()) {
      this.stories.push({ user: this.newUser, title: this.newTitle, text: this.newStory, image: this.selectedImage });
      this.newUser = '';
      this.newTitle = '';
      this.newStory = '';
      this.selectedImage = null;
    }
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.selectedImage = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }
}
