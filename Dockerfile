FROM ruby:2.7

RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - && \
  echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list

RUN apt-get update -qq && apt-get install -y nodejs yarn

RUN mkdir /lyrics-site-rails
WORKDIR /lyrics-site-rails

COPY Gemfile /lyrics-site-rails/Gemfile
COPY Gemfile.lock /lyrics-site-rails/Gemfile.lock
RUN bundle install
RUN yarn install --check-files