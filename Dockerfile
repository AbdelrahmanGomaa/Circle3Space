FROM mcr.microsoft.com/dotnet/aspnet:9.0 AS runtime
WORKDIR /app
COPY ./publish/ ./            
RUN mkdir -p /app/wwwroot/media
ENTRYPOINT ["dotnet", "circle3coworkingspace.dll"]