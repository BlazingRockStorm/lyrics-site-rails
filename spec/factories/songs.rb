FactoryBot.define do
  factory :song do
    name { 'テストを書く' }
    lyric { 'RSpec&Capybara&FactoryBotを準備する' }
    spotify_link { 'RSpec&Capybara&FactoryBotを準備する' }
  end
end