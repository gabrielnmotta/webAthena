export default interface IBlocks {
    blockId: string;
    name: string;
    abrv: string;
    blockParent: string;
    leafParent: boolean;
    date: number;
    data: {
      windSpeed: any;
      solarIrradiation: any;
      temperature: any;
      rain: any;
      relativeHumidity: any;
    };
}