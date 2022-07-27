if Rails.env === 'production' 
    Rails.application.config.session_store :cookie_store, key: '_cur8', domain: '_cur8-json-api'
else
    Rails.application.config.session_store :cookie_store, key: '_cur8'
end