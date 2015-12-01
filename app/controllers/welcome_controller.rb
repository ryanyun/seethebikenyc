require 'open-uri'
class WelcomeController < ApplicationController
  def index
    @coords = []
    stations = JSON.parse(open("http://www.citibikenyc.com/stations/json").read)['stationBeanList']
    stations.select{|s| s['statusValue'] == "In Service"}.each{|s| s['availableBikes'].times{@coords << ["#{s['latitude']}".to_f, "#{s['longitude']}".to_f]}}
    gon.coords = @coords
  end
end