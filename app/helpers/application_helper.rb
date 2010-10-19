module ApplicationHelper
  def title(title)
    content_for(:title) {title}
  end

  def actions(tag = :div, &block)
    #content = with_output_buffer(&block)
    #content_tag(tag, content, :class => 'actions')
    content_tag(tag, :class => 'actions', &block)
  end

end
