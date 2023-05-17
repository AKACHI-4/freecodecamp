FROM mcr.microsoft.com/devcontainers/typescript-node:20

RUN apt-get update && apt-get install -y python3 --no-install-recommends \
    && apt-get clean && rm -rf /var/lib/apt/lists/*
RUN wget -nv -T 20 "https://bootstrap.pypa.io/get-pip.py" && python3 get-pip.py

COPY . /src/
WORKDIR /src

RUN make setup

CMD ["make", "all"]