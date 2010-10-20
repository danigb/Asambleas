module ParticipantsHelper
  def participant_tag(participant)
    content_tag(:div, :id => dom_id(participant), :class => dom_class(participant)) do
      content_tag(:span, participant.user.name, :class => 'user_name')
      content_tag(:span, :class => 'roles') do
        participant.roles.each do |rol|
          content_tag(:span, rol.name, :class => 'rol')
        end
      end
    end
  end
end