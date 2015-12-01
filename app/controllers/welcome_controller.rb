require 'open-uri'
class WelcomeController < ApplicationController
  def index
    hm_crds = []
    stations = []
    available_stations = JSON.parse(open("http://www.citibikenyc.com/stations/json").read)['stationBeanList']
    available_stations.select{|s| s['statusValue'] == "In Service"}.each do |s|
      s['availableBikes'].times{hm_crds << ["#{s['latitude']}".to_f, "#{s['longitude']}".to_f]}
      stations << [s['latitude'], s['longitude'], s['availableBikes'].to_s, s['availableDocks'].to_s, s['stationName']]
    end
    gon.coords = hm_crds
    gon.stations = stations
  end
end