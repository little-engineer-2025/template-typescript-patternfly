##
# TODO Review the whole file and remove the variables that does not make sense
#      for this repository.
# TODO Remove this placeholder and the above when you finish to review the file.
#
# Set default variable values for the project
##
APP_NAME ?= todo
export APP_NAME
APP_COMPONENT ?= frontend
export APP_COMPONENT

BIN ?= bin
PATH := $(CURDIR)/$(BIN):$(PATH)
export PATH

COMPOSE_FILE ?= $(PROJECT_DIR)/deploy/docker-compose.yaml

ifeq ($(QUAY_USER),)
error(QUAY_USER is not defined)
endif
CONTAINER_IMAGE_BASE ?= quay.io/$(firstword $(subst +, ,$(QUAY_USER)))/$(APP_NAME)-$(APP_COMPONENT)

# Application specific parameters

