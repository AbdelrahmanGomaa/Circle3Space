# Stage 1: Build and publish
FROM mcr.microsoft.com/dotnet/sdk:9.0 AS build
WORKDIR /src

# ننسخ كل ملفات المشروع
COPY . .

# نعمل publish في فولدر داخل المشروع نفسه
RUN dotnet publish "circle3coworkingspace.csproj" -c Release -o /src/publish

# Stage 2: Runtime
FROM mcr.microsoft.com/dotnet/aspnet:9.0 AS runtime
WORKDIR /app

# انسخ الملفات المنشورة من مرحلة الـ build
COPY --from=build /src/publish ./

# أنشئ مجلد الميديا (لو مش موجود)
RUN mkdir -p /app/wwwroot/media

ENTRYPOINT ["dotnet", "circle3coworkingspace.dll"]
