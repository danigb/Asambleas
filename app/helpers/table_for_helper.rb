module TableForHelper
  def table_for(models)
    table = TableForBuilder.new(models)
    yield table
    content_tag(:table, build(table))
  end

  protected
  def build(table)
    content_tag(:thead, build_thead(table)) + content_tag(:tbody, build_tbody(table))
  end

  def build_thead(table)
    head = ""
    table.cols.each do |col|
      head << content_tag(:td, col[:name]).html_safe
    end
    head.html_safe
  end

  def build_tbody(table)
  end


  class TableForBuilder
    attr_accessor :models, :cols
    def initialize(models)
      @models = models
      @cols = []
    end

    def column(name)
      @cols << {:name => name}
      ''
    end

  end
end