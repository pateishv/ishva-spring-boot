import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StackService {
  private dataItems: string[] = ['Data 1', 'Data 2', 'Data 3'];

  push(item: string): void {
    this.dataItems.push(item);
  }

  pop(): string | undefined {
    return this.dataItems.pop();
  }

  fetchItems(): string[] {
    return [...this.dataItems].reverse();
  }
}
