// @/shared/services/socketService.ts
import * as signalR from "@microsoft/signalr";

class SocketService {
  private connection: signalR.HubConnection | null = null;

  public async connect(hubUrl: string): Promise<void> {
    if (this.connection?.state === signalR.HubConnectionState.Connected) return;

    this.connection = new signalR.HubConnectionBuilder()
      .withUrl(`${import.meta.env.VITE_API_URL}${hubUrl}`, {
        accessTokenFactory: () =>
          localStorage.getItem("localStoragetoken") || "",
      })
      .withAutomaticReconnect()
      .build();

    await this.connection.start();
  }

  public on<T>(eventName: string, callback: (data: T) => void): void {
    this.connection?.on(eventName, callback);
  }

  public off(eventName: string): void {
    this.connection?.off(eventName);
  }

  public disconnect(): void {
    this.connection?.stop();
    this.connection = null;
  }
}

export const socketService = new SocketService();
