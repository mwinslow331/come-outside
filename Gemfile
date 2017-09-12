source 'https://rubygems.org/'
ruby "2.3.3"

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end

gem 'rails', '5.0.0.1'
gem 'responders'
gem 'pg', '~> 0.15'
gem 'puma', '~> 3.0'
gem 'sass-rails', '~> 5.0'
gem 'coffee-rails', '~> 4.2'
gem 'uglifier', '>= 1.3.0'
gem 'jquery-rails'
gem 'dotenv-rails'

group :development, :test do
  gem 'byebug', platform: :mri
  gem 'pry-rails'
  gem 'rspec-rails', '~> 3.0'
  gem 'factory_girl_rails'
  gem 'capybara'
  gem 'launchy', require: false
  gem 'shoulda-matchers', require: false
  gem 'valid_attribute'
end

group :development do
  gem "web-console", ">= 3.3.0"
  gem 'listen', '~> 3.1'
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.1'
end

group :test do
  gem 'database_cleaner'
  gem 'coveralls', require: false
end

group :production do
  gem 'rails_12factor'
end

gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
