//@flow
class Something {
    getInfo() {}
  }
  class City extends Something {
    getPopulation() {}
  }
  class Moscow extends City {
    getPutinAdvice() {}
  }
  
  class CityInformer {
    population;
    info;
    getCity(value: City): City {
      this.info = value.getInfo();
      this.population = value.getPopulation();
      return value;
    }
  }
  
  class CustomInformer extends CityInformer {
    advice;
    getCity(value: Moscow): City {
      this.advice = value.getPutinAdvice();
      return new Moscow();
    }
  }
  
  const informer = new CustomInformer();
  
  const myCity = informer.getCity(new City());
  myCity.getInfo();
  myCity.getPopulation();
  