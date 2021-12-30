# frozen_string_literal: true

class HomeController < ApplicationController
  def index; end

  def song_detail
    render 'index'
  end

  def songs
    redirect_to action: "index"
  end
end
