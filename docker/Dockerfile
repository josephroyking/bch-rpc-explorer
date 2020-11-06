FROM node:14.8.0

RUN groupadd -r explorer && useradd -mrg explorer -s /bin/bash explorer

USER explorer
ENV HOME=/home/explorer

# Set up global npm for unprivileged user
WORKDIR ${HOME}
RUN mkdir .local
RUN npm set prefix ${HOME}/.local
ENV PATH=${PATH}:${HOME}/.local/bin

# Grab latest explorer and install
RUN git clone https://github.com/bitcoincashorg/block-explorer
WORKDIR ${HOME}/block-explorer
RUN npm install

ENTRYPOINT ["./bin/cli.js"]
