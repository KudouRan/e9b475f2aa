import type { LoggerOptions, LogOptions, MessageType } from '@/types/log';

export class Logger {
  static pushValue = '';
  static brChar = '\n';
  static emojis = {
    error: 'error',
    warn: 'warn',
    info: 'info',
    verbose: 'verbose',
    debug: 'debug',
  };
  private consoleLeval = ['error', 'warn', 'info', 'verbose', 'debug'];

  constructor(
    private options: LoggerOptions = { console: 'info', file: 'info', push: 'info' },
    public name = 'default',
  ) {}

  public log({ level }: LogOptions, message: MessageType, emoji?: string) {
    emoji = emoji || Logger.emojis[level];
    const stderr = ['error', 'warn'].includes(level),
      payload = this.options.payload ? ` \u005b${this.options.payload}\u005d ` : ' ';
    if (this.consoleLeval.includes(level)) {
      this.Conslole(`\u005b${emoji}\u005d${payload}${message}\n`, stderr);
    }
  }

  public error(message: MessageType) {
    this.log({ level: 'error' }, message);
  }

  public warn(message: MessageType) {
    this.log({ level: 'warn' }, message);
  }

  public info(message: MessageType, emoji?: string) {
    this.log({ level: 'info' }, message, emoji);
  }

  public verbose(message: MessageType) {
    this.log({ level: 'verbose' }, message);
  }

  public debug(message: MessageType) {
    this.log({ level: 'debug' }, message);
  }

  private Conslole(message: string, stderr: boolean) {
    if (stderr) {
      process.stderr.write(message);
      return;
    }
    process.stdout.write(message);
  }
}

export const logger = new Logger({
  console: 'debug',
  file: 'debug',
  push: 'debug',
});
