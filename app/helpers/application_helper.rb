module ApplicationHelper
  def title(title)
    content_for(:title) {title}
    content_tag(:h1, title)
  end

  def actions(tag = :div, &block)
    #content = with_output_buffer(&block)
    #content_tag(tag, content, :class => 'actions')
    content_tag(tag, :class => 'buttons', &block)
  end

  def jd(value)
    escape_javascript(value)
    value
  end

end
