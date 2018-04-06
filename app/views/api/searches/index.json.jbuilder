@results.each do |result|
  json.set! result.id do
    json.partial! 'result', result: result
  end
end
