import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-live-room',
  templateUrl: './live-room.component.html',
  styleUrls: ['./live-room.component.css']
})
export class LiveRoomComponent implements OnInit {
  coverImg: string = "";
  @Input('room') roomId: string;
  isLive: boolean = false;
  constructor(private http: HttpClient,
              private host: ElementRef<HTMLElement>) { }

  ngOnInit(): void {
    this.getStreamInfo().subscribe(res => {
      if(res.data){
        console.log(res.data);
        // Cover
        this.coverImg = res.data.user_cover;

        // Status
        if(res.data.live_status === 1){
          this.isLive = true;
        } else {
          this.isLive = false;
        }
      }
    })
  }

  getStreamInfo() {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.get(`https://api.live.bilibili.com/room/v1/Room/get_info?room_id=${this.roomId}`, {headers: headers})
  }

  close() {
    this.host.nativeElement.remove();
  }

}
