package main

import (
	"context"
	"encoding/json"
	"fmt"
	"github.com/wailsapp/wails/v2/pkg/runtime"
	"log"
	"os"
)

// App struct
type App struct {
	ctx context.Context
}

type Cache map[string]string

func (c *Cache) Save() {
	marshal, err := json.Marshal(c)
	if err != nil {
		runtime.LogError(context.Background(), err.Error())
	} else {
		err = os.WriteFile(storeFile, marshal, 0644)
	}
}

func (c *Cache) Load() {
	file, err := os.ReadFile(storeFile)
	if err != nil {
		log.Println(err)
		return
	}
	err = json.Unmarshal(file, &c)
	if err != nil {
		log.Println(err)
		return
	}
}

var (
	cache     = make(Cache)
	storeFile = "storeFile.json"
)

// NewApp creates a new App application struct
func NewApp() *App {
	cache.Load()
	return &App{}
}

// startup is called when the app starts. The context is saved
// so we can call the runtime methods
func (a *App) startup(ctx context.Context) {
	a.ctx = ctx
}

// Greet returns a greeting for the given name
func (a *App) Greet(name string) string {
	return fmt.Sprintf("Hello %s, It's show time!", name)
}

func (a *App) GetData(key string) string {
	return cache[key]
}

func (a *App) SetData(key string, value string) {
	cache[key] = value
	cache.Save()
}
