import AccelerationSvg from '../assets/acceleration.svg'
import SpeedSvg from '../assets/speed.svg'
import ForceSvg from '../assets/force.svg'
import GasolineSvg from '../assets/gasoline.svg'
import EletricSvg from '../assets/energy.svg'
import HybridSvg from '../assets/hybrid.svg'
import PeopleSvg from '../assets/people.svg'
import ExchangeSvg from '../assets/exchange.svg'
import CarSvg from '../assets/car.svg'

export function getAccessoryDetails(type:string) {
  switch (type) {
    case 'speed':
      return SpeedSvg
    case 'acceleration':
      return AccelerationSvg
    case 'turning_diameter':
      return ForceSvg
    case 'gasoline_motor':
      return GasolineSvg
    case 'eletric_motor':
      return EletricSvg
    case 'hybrid_motor':
      return HybridSvg 
    case 'exchanges':
      return ExchangeSvg
    case 'seats':
      return PeopleSvg  
    default:
      return CarSvg;
  }
}