module Api
  module V1
    class MessagesController < ApplicationController
      def index
        @message = Message.random
        render json: @message
      end
    end
  end
end
