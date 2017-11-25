@comments.each do |comment|
  json.set! comment.di do
    json.partial! 'comment', comment: comment
  end
end
